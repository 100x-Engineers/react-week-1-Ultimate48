import Button from "../Button";
import Text from "../Text";

export default function MainContent(){
    return(
          <section className="flex w-full py-0 px-7 flex-col">
            <section className="flex-col gap-3">
              <div className="text-neutral-50 text-[31px] not-italic font-extrabold leading-normal font-Inter">
                Happening now
              </div>
              <div className="text-neutral-50 text-[16px] not-italic font-medium leading-normal font-Inter">
                Join Today
              </div>
            </section>
            <a href="/src/Login/create-account-step-1.html">
              <Button variant="default" width="full" marginY={10}>
                <Text text = "Create Account" size="md" color="neutral-1000" />
              </Button>
            </a>
            <div className="flex justify-center items-center gap-1 self-stretch mb-10">
              <div className="w-full h-[1px] bg-[#404040]" />
              <div className="text-neutral-50 text-center text-base not-italic font-normal leading-normal font-Chirp">or</div>
              <div className="w-full h-[1px] bg-[#404040]" />
            </div>
            <div className="text-neutral-50 text-[20px] not-italic font-medium leading-normal mb-5 font-Inter">
              Already have an account?
            </div>
            <a href="/src/HomeFeed/index.html">
              <Button variant="outline" width="full">
                <Text text = "Sign in" size="md" color="twitterblue-default" hoverColor="twitterblue-hover" />
              </Button>
            </a>
          </section>
    );
  }