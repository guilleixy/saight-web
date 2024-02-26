export default function HeroVideo(){
    return(
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
            style={{ objectFit: "cover", borderRadius: "20px" }}
        >
            <source src="/videotest.mp4" type="video/mp4"/>
            Tu navegador no acepta vídeos :(
        </video>
    )
}