import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Link } from "lucide-react";
import { motion } from "framer-motion";

const base_url = import.meta.env.VITE_API_URL;

const ProxyView = ({ url, job }: any) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [loadFailed, setLoadFailed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showPreview, setShowPreview] = useState(false);
    const [iframeContent, setIframeContent] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setLoadFailed(false);
    }, [url, job]);

    useEffect(() => {
        const fetchProxyContent = async () => {
            try {
                const response = await axios.post(`${base_url}/proxy`, { url });
                const html = response.data;
                setIframeContent(html);
                if (iframeRef.current) {
                    iframeRef.current.srcdoc = html;
                }
            } catch (error) {
                console.error("Error fetching proxy content:", error);
                setLoadFailed(true);
                setLoading(false);
            }
        };

        fetchProxyContent();
    }, [url]);

    const handleIframeLoad = () => {
        setLoadFailed(false);
        setLoading(false);
    };

    const handleIframeError = () => {
        setLoadFailed(true);
        setLoading(false);
    };

    const togglePreview = () => {
        setShowPreview(!showPreview);
        if (!showPreview && iframeRef.current && iframeContent) {
            iframeRef.current.srcdoc = iframeContent;
        }
    };

    if (loadFailed) {
        return (
            <div className="flex flex-col gap-2 h-full relative">
                <h1 className="text-center font-light text-2xl pb-4 border-b">
                    {job.title}
                </h1>
                <div className="h-full overflow-hidden">
                    <ReactMarkdown className="p-2 h-full pb-20 overflow-y-auto">
                        {job.description}
                    </ReactMarkdown>
                </div>
                <a
                    href={job.job_url}
                    target="_blank"
                    className="w-full flex items-center gap-2 border p-4 bottom-6 mt-auto cursor-pointer shadow-md bg-black text-white py-3 hover:opacity-90 rounded-xl absolute font-light text-xs"
                    rel="noopener noreferrer"
                >
                    <Link size={16} />
                    <span>View Job Post</span>
                </a>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <button
                onClick={togglePreview}
                className="w-full flex items-center gap-2 border p-4 bottom-6 mt-auto cursor-pointer shadow-md bg-black text-white py-3 hover:opacity-90 rounded-xl absolute font-light text-xs"
            >
                {showPreview ? "Show Iframe" : "Show Preview"}
            </button>
            {loading && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="loader"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    ></motion.div>
                </motion.div>
            )}
            {showPreview ? (
                <div className="flex flex-col gap-2 h-full relative">
                    <h1 className="text-center font-light text-2xl pb-4 border-b">
                        {job.title}
                    </h1>
                    <div className="h-full overflow-hidden">
                        <ReactMarkdown className="p-2 h-full pb-20 overflow-y-auto">
                            {job.description}
                        </ReactMarkdown>
                    </div>
                    <a
                        href={job.job_url}
                        target="_blank"
                        className="w-full flex items-center gap-2 border p-4 bottom-6 mt-auto cursor-pointer shadow-md bg-black text-white py-3 hover:opacity-90 rounded-xl absolute font-light text-xs"
                        rel="noopener noreferrer"
                    >
                        <Link size={16} />
                        <span>View Job Post</span>
                    </a>
                </div>
            ) : (
                <iframe
                    ref={iframeRef}
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    sandbox={`
                        allow-forms
                        allow-modals
                        allow-orientation-lock
                        allow-pointer-lock
                        allow-popups
                        allow-popups-to-escape-sandbox
                        allow-presentation
                        allow-same-origin
                        allow-scripts
                        allow-storage-access-by-user-activation
                        allow-top-navigation
                        allow-top-navigation-by-user-activation
                    `}
                    className="w-full h-full rounded-xl"
                ></iframe>
            )}
        </div>
    );
};

export default ProxyView;
