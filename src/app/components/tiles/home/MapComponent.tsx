export default function MapComponent() {
    const udaipurEmbedUrl = "https://maps.google.com/maps?q=24.5854,73.7125&z=11&output=embed";

    return (
        <div className="w-full h-full relative">
            <iframe
                title="Google Map of Udaipur"
                src={udaipurEmbedUrl}
                className="w-full h-full border-0 filter transition duration-500 dark:[filter:grayscale(100%)_invert(92%)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </div>
    );
}