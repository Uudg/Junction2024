import { useEffect, useRef } from "react";
import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const ProxyView = ({ url }: { url: string }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const fetchProxyContent = async () => {
            try {
                const response = await axios.post(`${base_url}/proxy`, { url });
                const html = response.data;
                if (iframeRef.current) {
                    iframeRef.current.srcdoc = html;
                }
            } catch (error) {
                console.error("Error fetching proxy content:", error);
            }
        };

        fetchProxyContent();
    }, [url]);

    return (
        <iframe ref={iframeRef} className="w-full h-full rounded-xl"></iframe>
    );
};

export default ProxyView;
