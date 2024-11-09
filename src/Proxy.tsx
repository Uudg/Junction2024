const base_url = import.meta.env.VITE_API_URL;

const ProxyView = ({url}: {url: string}) => {
    const handleStart = (e: any) => {
        console.log(e);
    }

    return (
         <iframe 
            src={"https://junction2024-690e3.firebaseapp.com/"}
            className="w-full h-full rounded-xl"
            // allow-scripts
            // allow-same-origin
            // allowTransparency
        ></iframe>
    )
}

export default ProxyView;