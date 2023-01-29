// import React, { useState } from 'react';
import React, { useState } from "react";
import { 
    Form,
    Button,
    Progress,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
  } from 'reactstrap';
import Pyscript from "./Pyscript";
import '../App.css';
import will from '../assets/will_925x782.png'; // gives image path

const Result = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

    const pyscript = `
    for i in range(9):
        print(i)

    def func():
        print('function works')
    `

  return (
        <div className="bg">
            <h1>RESULTS</h1>
            <h2>We've calculated that 86.5% of your items abide all guidelines!</h2>
            <div className="padded">
                <Progress
                animated
                color="warning"
                value={39}
                />
                <div className="padded">
                    <div>
                        <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
                        <Script defer src="https://pyscript.net/latest/pyscript.js" strategy='beforeInteractive'/>
                    </div>
                    <div>
                        <py-script dangerouslySetInnerHTML={{__html: pyscript}} />
                    </div>
                </div>
                <img src={will} alt="Will the Packmate" width="70" height="55" className="center"/>
                <div className="flex flex-col items-center padded">
                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem>
                        <AccordionHeader targetId="1">Self-Defense Sprays</AccordionHeader>
                        <AccordionBody accordionId="1">
                            One 4 fl. oz. (118 ml) container of mace or pepper spray is permitted in checked baggage provided it is equipped with a safety mechanism to prevent accidental discharge. Self-defense sprays containing more than 2 percent by mass of tear gas (CS or CN) are prohibited in checked baggage. For more information, visit faa.gov.

                            We recommend checking with your airline as some may not allow this item in checked bags.
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="2">Canned Foods</AccordionHeader>
                        <AccordionBody accordionId="2">
                            There are some items that are not on the prohibited items list, but because of how they appear on the X-ray, security concerns, or impact of the 3-1-1 rules for liquids, gels and aerosols, they could require additional screening that might result in the item not being allowed through the checkpoint. We suggest that you pack this item in your checked bag, ship it to your destination or leave it at home.
                        </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                        <AccordionHeader targetId="3">Aerosol Insecticide</AccordionHeader>
                        <AccordionBody accordionId="3">
                            Aerosol insecticides are not allowed in carry-on; however they are allowed in checked bags as long as they are not labeled as hazardous material (HAZMAT).
                        </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Form>
                        <Button href="/" tag='a' color="info">Back</Button>
                    </Form>
                </div>
                <div className="padded">
                <img src={will} alt="Will the Packmate" width="350" height="225" className="center"/>
                </div>
            </div>
        </div>
    );
};

export default Result;
