import React, { useEffect, useRef } from 'react'
import Typewriter from './Typewriter'
import ButtonGroup from './ButtonGroup'

export default function VendorResponse({setReady, scroll}) {

    return (
        <div className='italic font-semibold' style={{ whiteSpace: 'pre-line' }}>
            <Typewriter setReady={setReady} text={"\"Dear Vendor A,\n\nI hope this message finds you well. \n\nI wanted to take a moment to provide feedback on your proposal for the Talent Acquisition Software RFP. We appreciate the effort you put into your submission and believe there are both positive aspects and areas for improvement that we would like to discuss further.\n\nPositive Feedback:\n\n   -	Comprehensive Feature Set: Your software offers a comprehensive range of features that align well with our organization's talent acquisition needs. We were particularly impressed by your Interview management guide.\n\t-	User Interface: The user interface of your software is intuitive and visually appealing. It seems user-friendly, which is crucial for our recruiters and hiring managers.\n\t-	Integration Capabilities: Your software's integration capabilities with our existing systems appear robust, which would streamline our workflows and enhance efficiency.\n\nAreas for Improvement:\n\n-	Cost Transparency: While we understand the complexity of pricing structures, we found the pricing information in your proposal to be somewhat opaque. Clearer pricing details would help us better evaluate the total cost of ownership and make informed decisions.\n\t-	Customization Options: We would appreciate more information on the extent to which your software can be customized to meet our specific requirements. Tailored solutions are essential for us to effectively address our unique talent acquisition challenges.\n\t-	Support and Training: Although your proposal mentions support and training services, we would like to gain a deeper understanding of the level of support provided post-implementation. Additionally, clarity on the availability and format of training resources would be beneficial.\nWe are impressed by your offering and believe that addressing these areas for improvement would strengthen your proposal and increase the likelihood of a successful partnership. We would welcome the opportunity to discuss these points further and explore how we can work together to meet our talent acquisition objectives.\n\nThank you once again for your time and consideration. We look forward to hearing from you soon.\n\nBest regards,\""} delay={3} scroll={scroll} />
            <div className='mt-6'>
                <ButtonGroup />
            </div>
        </div>
    )
}
