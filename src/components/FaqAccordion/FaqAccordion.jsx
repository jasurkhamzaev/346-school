import React from 'react';
import './FaqAccordion.css';
import { Accordion } from 'react-bootstrap';

function FaqAccordion() {
    return (
        <div className='faq-section'>
            <div className="container d-flex flex-column align-items-center">
                <h2 className='text-center text-capitalize mb-5'>Frequently Asked Question</h2>
                <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis rem corporis ipsa doloremque dolor neque tenetur sapiente cum veniam ullam perferendis atque sint provident sed corrupti et,
                    pariatur non sequi natus officia amet, omnis, inventore repellendus. Nesciunt, culpa sit.
                    <Accordion defaultActiveKey="" flush>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>First Quaestion ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum quasi a ad laborum temporibus,
                                blanditiis perspiciatis labore dolorem cum expedita ratione sit! Quia voluptatem dignissimos, illo modi laudantium animi sit possimus inventore labore fugiat sunt aliquam dicta deserunt dolorum in fugit itaque, nostrum ut optio maiores eum esse velit!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Second Quaestion ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum quasi a ad laborum temporibus,
                                blanditiis perspiciatis labore dolorem cum expedita ratione sit! Quia voluptatem dignissimos, illo modi laudantium animi sit possimus inventore labore fugiat sunt aliquam dicta deserunt dolorum in fugit itaque, nostrum ut optio maiores eum esse velit!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Third Quaestion ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum quasi a ad laborum temporibus,
                                blanditiis perspiciatis labore dolorem cum expedita ratione sit! Quia voluptatem dignissimos, illo modi laudantium animi sit possimus inventore labore fugiat sunt aliquam dicta deserunt dolorum in fugit itaque, nostrum ut optio maiores eum esse velit!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>Fourth Quaestion ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum quasi a ad laborum temporibus,
                                blanditiis perspiciatis labore dolorem cum expedita ratione sit! Quia voluptatem dignissimos, illo modi laudantium animi sit possimus inventore labore fugiat sunt aliquam dicta deserunt dolorum in fugit itaque, nostrum ut optio maiores eum esse velit!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </p>
            </div>
        </div>
    )
}

export default FaqAccordion
