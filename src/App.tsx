import Navigation from "./components/Navigation";
import SocialLink from "./components/SocialLink";

import StarfieldScene from "./components/scene/StarfieldScene";

const App = () => {
    return (
        <>
            <StarfieldScene />
            <Navigation />
            <main className="max-w-2xl mx-auto mt-32 text-white px-3">
                <p className="uppercase text-lg text-yellow-500">Del Oro</p>
                <h1 className="text-5xl md:text-7xl font-bold">
                    Programming Club
                </h1>
                <p className="mt-4 text-lg">
                    Little corner of coders on the Internet. Meetings every
                    Thursday intervention.
                </p>

                <div className="flex items-center mt-8 gap-3">
                    <a
                        className="px-6 flex items-center justify-center text-lg border h-12 hover:bg-white hover:text-black transition-colors"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdKfv4kId_ya6vajx7oSymDl4YUCYl7vr8Zm8lTDk5BT2ajdA/viewform"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Register
                    </a>

                    <SocialLink
                        href="https://www.remind.com/join/delorocs"
                        logo="remind_logo.png"
                    />
                    <SocialLink
                        href="https://www.instagram.com/delorocodingclub/"
                        logo="instagram_logo.jpg"
                    />
                    <SocialLink
                        href="https://discord.gg/8gbFjy48RV"
                        logo="discord_logo.png"
                    />
                </div>
            </main>
        </>
    );
};

export default App;
