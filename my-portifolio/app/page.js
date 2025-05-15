import Image from "next/image";
import Profile from "./images/profile";
import SocialMediaLinks from "./components/SocialMediaLinks";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-4 py-8">
                <div className="bg-neutral-800 p-8 rounded-xl shadow-xl max-w-md w-full text-center">
                    <Image
                        src ="images/profile.jpg"
                        alt ="Foto de Ítalo Cézar"
                        width = {100}
                        height = {100}
                        className = "rounded-full mx-auto mb-4"
                    />
                    <h1 className="text-xl font-semibold mb-1">Ítalo Cézar de Aquino Verçoza</h1>
                    <p className="text-green-400 mb-4">Infrastructure engineer / Developer</p>
                    <p className="text-sm italic mb-4">
                        Thank you for visit my web page. Feel free to navigate on each page, but be careful, you run the risk of not wanting to leave.
                    </p>
    
                    <SocialMediaLinks/>
                    <div className="mt-6">
                    <p className="text-sm text-gray-400">Contacts</p>
                    <p className="text-sm">italovercoza27@gmail.com</p>
                    </div>
                </div>
            </main>
  );
}
