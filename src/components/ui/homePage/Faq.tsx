import { Slide } from "react-awesome-reveal";

const Faq = () => {
    return (
        <section className="my-16">
             <Slide>
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked <span className="text-violet-500" >Questions</span> </h2></Slide>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl  font-medium">What are mechanical keyboards, and how do they differ from membrane keyboards?</div>
                <div className="collapse-content">
                    <p>Mechanical keyboards use individual mechanical switches for each key. These switches consist of a hard plastic “stem” with two metal contacts, a spring, and a housing. When a key is pressed, the stem pushes the contacts together, registering a keypress. </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What are the different types of mechanical switches, and how do I choose the right one for me?</div>
                <div className="collapse-content">
                    <p>Linear Switches (e.g., Cherry MX Red, Gateron Red): Smooth keypress with no tactile bump or audible click. Ideal for gaming due to their fast, consistent actuation.
                        Tactile Switches (e.g., Cherry MX Brown, Gateron Brown): Provide a noticeable bump at the actuation point, offering feedback without a loud click. Good for typing as they help reduce typing fatigue.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How do I maintain and clean my mechanical keyboard?</div>
                <div className="collapse-content">
                    <p>Dusting: Use a soft brush or compressed air to remove dust and debris from between the keys. <br></br>
                        Keycaps: Gently pull off keycaps using a keycap puller. Clean the keycaps with mild soap and water, then let them dry completely before reattaching.</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;