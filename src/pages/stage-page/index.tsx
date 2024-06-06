// import { FC } from "react"
// import Button from "../../components/Button";

// const StatePage = () => {
    
//     return (
//         <main Classname="container">
//             <div className="button-group">
//                 <Button tittle="+" />
//                 <h3>Number Count : {count} </h3>
//                 <Button tittle="-" />
//             </div>
//         </main>
//     )
// }

// export default StatePage;

import { useState } from "react";
import Button from "../../components/Button";
import Swal from "sweetalert2";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const StatePage = () => {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<boolean>(false);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      Swal.fire({
        title: "Out of Range",
        text: "Number cannot be negative",
        icon: "error",
        confirmButtonText: "Ok",
      });
      setCount(0);
    }
  };

  const changeColor = () => {
    setColor(!color);
  };

  return (
    <main className="container">
      <div className="button-group">
        <Button
          style={
            color === true ? "button-reusable-green" : "button-reusable-red"
          }
          title="+"
          onClick={incrementCount}
        />
        <div>
          <h3>Number Count : {count}</h3>
          <Button
            style={
              color === true ? "button-reusable-green" : "button-reusable-red"
            }
            onClick={changeColor}
            title="Change Color"
          />
        </div>
        <Button
          style={
            color === true ? "button-reusable-green" : "button-reusable-red"
          }
          title="-"
          onClick={decrementCount}
        />
      </div>
      <div className="my-10 grid grid-cols-1 gap-y-10 text-white">
        <div className="bg-blue-500 lg:bg-red-500 sm:bg-green-500 md:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500 p-10">
          Element 1
        </div>
        <div className="bg-blue-500 lg:bg-red-500 sm:bg-green-500 md:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500 p-10">
          Element 2
        </div>
        <div className="bg-blue-500 lg:bg-red-500 sm:bg-green-500 md:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500 p-10">
          Element 3
        </div>
      </div>
      <div className="mt-20">
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default StatePage;