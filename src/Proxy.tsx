const base_url = import.meta.env.VITE_API_URL;

const ProxyView = ({url}: {url: string}) => {
    return (
         <iframe 
            src={`${base_url}/proxy?url=${url}`} 
            className="w-full h-full border-0"
            allow-scripts
            allow-same-origin
            allowTransparency
        ></iframe>
    )
}

export default ProxyView;