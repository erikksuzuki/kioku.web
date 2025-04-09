import Logo from "./assets/kiokulogo.png";
import "./App.css";
import clsx from "clsx";
import AppStoreButton from "./assets/apple-download-shadow.png";

export const Bullet = ({ className }: { className?: string }) => {
  return <p className={clsx(className)}>{`\u29BF`}</p>;
};

export const BulletList = ({ listItems }: { listItems: string[] }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {listItems.map((item, index) => (
        <div key={item} className="flex flex-row items-start">
          <Bullet className="w-[7%] mt-1" />
          <p className="w-[93%]" key={`item-${index}`}>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="bg-[#152E41] text-left">
      <div className="p-2 text-white exo-regular max-w-screen-lg mx-auto">
        <div className="h-[80px]" />

        <header className="flex flex-col justify-center items-center pb-20">
          <img className="ml-[20px] w-[230px]" src={Logo} alt="image" />
        </header>

        <div className="flex flex-col gap-y-4">
          <p className="exo-regular text-[17px]">1. Information We Collect</p>
          <p className="exo-regular">
            By accessing or using Kioku, you agree to be bound by these Terms
            and our Privacy Policy. If you do not agree with any part of these
            Terms, please do not use the app.
          </p>
          <p className="exo-regular">
            We may collect the following types of information:
          </p>
          <BulletList
            listItems={[
              "Personal Information: Name, email address, phone number, and other details you provide when creating an account.",
            ]}
          />
          <p className="exo-regular text-[17px]">
            2. How We Use Your Information
          </p>
          <p className="exo-regular">
            We do not sell your personal information. However, we may share
            information with:
          </p>
          <BulletList
            listItems={[
              "Service Providers: Third-party vendors that help us operate the app.",
              "Legal Authorities: If required by law or to protect our rights.",
              "Business Transfers: In case of a merger, acquisition, or sale of assets.",
            ]}
          />
          <p className="exo-regular text-[17px]">3. Sharing Your Information</p>
          <p className="exo-regular">You agree not to:</p>
          <BulletList
            listItems={[
              "Use the app for any unlawful purpose.",
              "Post or share offensive, harmful, or inappropriate content.",
              "Attempt to hack, disrupt, or interfere with the app's functionality.",
              "Use automated systems to access the app without permission.",
            ]}
          />
          <p className="exo-regular text-[17px]">4. Data Security</p>
          <BulletList
            listItems={[
              "Any content you submit (such as reviews or comments) remains your property, but by submitting it, you grant us a non-exclusive license to use, modify, or display it within the app.",
              "The app’s design, graphics, and features are owned by the app owner and protected by intellectual property laws.",
            ]}
          />
          <p className="exo-regular">
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>
          <p className="exo-regular text-[17px]">5. Your Choices and Rights</p>
          <BulletList
            listItems={[
              "Access & Update: You can review and update your account details at any time.",
              "Delete Data: You can request account deletion by using the in-app settings.",
            ]}
          />
          <p className="exo-regular text-[17px]">6. Third-Party Services</p>
          <p className="exo-regular">
            Our app may contain links to third-party services. We are not
            responsible for their privacy practices. Please review their
            policies before using their services.
          </p>
          <p className="exo-regular text-[17px]">7. Children’s Privacy</p>
          <p className="exo-regular">
            Kioku is not intended for children under 10. We do not knowingly
            collect data from minors. If you believe we have collected data from
            a minor, please contact us.
          </p>
          <p className="exo-regular text-[17px]">8. Changes to This Policy</p>
          <p className="exo-regular">
            We may update this Privacy Policy from time to time. Continued use
            of the app after changes indicates acceptance of the new policy.
          </p>
          <p className="exo-regular text-[17px]">9. Contact Us</p>
          <p className="exo-regular">
            If you have any questions about this Privacy Policy, please contact
            us at <a href="mailto:support@akami.app">support@akami.app</a>
          </p>
          <p className="exo-regular">Thank you for using Kioku! 🚀</p>
        </div>

        <footer className="flex flex-row justify-center pb-10">
          <a href="https://testflight.apple.com/join/xRGCnVCM" target="_blank">
            <img className="w-[190px] mt-8" src={AppStoreButton} alt="image" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
