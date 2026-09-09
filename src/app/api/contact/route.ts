import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Please provide your name, email, and message.' },
                { status: 400 }
            );
        }

        const submission = {
            id: `msg_${Date.now()}`,
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
            dateFormatted: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        };

        // 1. Persistent Local File Backup (Never lose any message)
        try {
            const dataDir = path.join(process.cwd(), 'data');
            if (!fs.existsSync(dataDir)) {
                fs.mkdirSync(dataDir, { recursive: true });
            }
            const filePath = path.join(dataDir, 'contact-submissions.json');
            let existing: Array<Record<string, unknown>> = [];
            if (fs.existsSync(filePath)) {
                try {
                    const raw = fs.readFileSync(filePath, 'utf-8');
                    existing = JSON.parse(raw);
                } catch {
                    existing = [];
                }
            }
            existing.unshift(submission);
            fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf-8');
        } catch (fileErr) {
            console.warn('Could not save local message backup:', fileErr);
        }

        let notificationSent = false;

        // 2. Discord Webhook Notification (Instant Mobile Ping)
        if (process.env.DISCORD_WEBHOOK_URL) {
            try {
                await fetch(process.env.DISCORD_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: 'Portfolio Connect Bot',
                        avatar_url: 'https://github.com/Sparkyyy45.png',
                        embeds: [
                            {
                                title: `📬 New Portfolio Message from ${name}`,
                                color: 0x0A84FF,
                                fields: [
                                    { name: '👤 Sender Name', value: name, inline: true },
                                    { name: '✉️ Email', value: email, inline: true },
                                    { name: '💬 Message', value: message },
                                    { name: '🕒 Time (IST)', value: submission.dateFormatted, inline: true },
                                ],
                                footer: { text: 'Suyash Yadav Portfolio • the-repo-sage.vercel.app' },
                            },
                        ],
                    }),
                });
                notificationSent = true;
            } catch (discordErr) {
                console.warn('Discord webhook notification failed:', discordErr);
            }
        }

        // 3. SMTP / Nodemailer Email Notification (If configured)
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST || 'smtp.gmail.com',
                    port: Number(process.env.SMTP_PORT) || 465,
                    secure: process.env.SMTP_PORT !== '587',
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                });

                await transporter.sendMail({
                    from: `"Portfolio Connect" <${process.env.SMTP_USER}>`,
                    replyTo: email,
                    to: process.env.CONTACT_EMAIL || 'suyashyadav1709@gmail.com',
                    subject: `📬 Portfolio Message from ${name}`,
                    text: `New message from ${name} (${email}):\n\n${message}\n\nReceived at: ${submission.dateFormatted}`,
                    html: `
                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; background-color: #f8fafc; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
                            <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">New Message from Portfolio</h2>
                            <p style="margin: 6px 0;"><strong>Name:</strong> ${name}</p>
                            <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
                            <p style="margin: 6px 0; color: #64748b; font-size: 13px;"><strong>Time:</strong> ${submission.dateFormatted}</p>
                            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                            <h3 style="color: #334155; font-size: 15px; margin-bottom: 8px;">Message:</h3>
                            <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; white-space: pre-wrap; font-size: 14px; color: #1e293b; line-height: 1.6;">${message}</div>
                            <p style="margin-top: 20px; font-size: 12px; color: #94a3b8; text-align: center;">Click reply to email ${name} directly.</p>
                        </div>
                    `,
                });
                notificationSent = true;
            } catch (smtpErr) {
                console.warn('SMTP email dispatch failed:', smtpErr);
            }
        }

        // 4. FormSubmit AJAX Relay (Delivers straight to suyashyadav1709@gmail.com with zero credentials)
        if (!notificationSent) {
            try {
                const formSubmitRes = await fetch('https://formsubmit.co/ajax/suyashyadav1709@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                        _subject: `📬 Portfolio Connect: ${name} sent you a message`,
                        _template: 'table',
                        _replyto: email,
                    }),
                });

                if (formSubmitRes.ok) {
                    notificationSent = true;
                }
            } catch (formSubmitErr) {
                console.warn('FormSubmit relay failed:', formSubmitErr);
            }
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Message sent successfully! Suyash will be notified immediately.',
                timestamp: submission.timestamp,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error handling contact form:', error);
        return NextResponse.json(
            { error: 'Failed to process message. Please email suyashyadav1709@gmail.com directly.' },
            { status: 500 }
        );
    }
}
