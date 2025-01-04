/*In this lab, you will create a simple yet functional accordion component using React. 
An accordion is a UI pattern consisting of collapsible items, typically used for displaying FAQs or other content in a space-efficient manner. 
Your task is to build an accordion where only one item's content is displayed at a time.*/

import { useState } from "react";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ marginTop: "2rem", padding: "1rem" }}>
      <div style={{ marginBottom: "1rem", marginLeft: "1rem" }}>
        <div
          style={{
            padding: "0.5rem",
            border: "1px solid #0d6efd",
            borderRadius: "0.5rem 0.5rem 0 0",
            color: "#0d6efd",
            cursor: "pointer",
          }}
          onClick={() => togglePanel(0)}
        >
          What is the return policy for online orders?
        </div>
        <div
          style={{
            padding: "0.5rem",
            color: "#f8f9fa",
            background: "#0d6efd",
            borderRadius: "0 0 0.5rem 0.5rem ",
          }}
        >
          {activeIndex === 0 && (
            <>
              Our return policy allows customers to return products within 30
              days of purchase. Items must be in their original condition,
              unused, and with all tags and packaging intact. To initiate a
              return, please contact our customer service team for instructions.
              Shipping fees are non-refundable, and the customer is responsible
              for the cost of return shipping unless the item is defective or
              damaged.
            </>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "1rem", marginLeft: "1rem" }}>
        <div
          style={{
            padding: "0.5rem",
            border: "1px solid #0d6efd",
            borderRadius: "0.5rem 0.5rem 0 0",
            color: "#0d6efd",
            cursor: "pointer",
          }}
          onClick={() => togglePanel(1)}
        >
          How do I track my order?
        </div>
        <div
          style={{
            padding: "0.5rem",
            color: "#f8f9fa",
            background: "#0d6efd",
            borderRadius: "0 0 0.5rem 0.5rem ",
          }}
        >
          {activeIndex === 1 && (
            <>
              Once your order is shipped, you will receive a confirmation email
              containing a tracking number. You can use this tracking number on
              our website or the carrier's website (e.g., UPS, FedEx) to monitor
              the status of your shipment. If you have any issues with tracking,
              feel free to contact our support team.
            </>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "1rem", marginLeft: "1rem" }}>
        <div
          style={{
            padding: "0.5rem",
            border: "1px solid #0d6efd",
            borderRadius: "0.5rem 0.5rem 0 0",
            color: "#0d6efd",
            cursor: "pointer",
          }}
          onClick={() => togglePanel(2)}
        >
          Do you offer international shipping?
        </div>
        <div
          style={{
            padding: "0.5rem",
            color: "#f8f9fa",
            background: "#0d6efd",
            borderRadius: "0 0 0.5rem 0.5rem ",
          }}
        >
          {activeIndex === 2 && (
            <>
              Yes, we offer international shipping to most countries. Delivery
              times and shipping fees vary depending on your location and the
              carrier. During checkout, you can view the available shipping
              options for your destination. Please note that customs duties and
              taxes may apply, and it is the responsibility of the customer to
              cover these additional charges.
            </>
          )}
        </div>
      </div>

      <div style={{ marginLeft: "1rem" }}>
        <div
          style={{
            padding: "0.5rem",
            border: "1px solid #0d6efd",
            borderRadius: "0.5rem 0.5rem 0 0",
            color: "#0d6efd",
            cursor: "pointer",
          }}
          onClick={() => togglePanel(3)}
        >
          Can I change or cancel my order after it's been placed?
        </div>
        <div
          style={{
            padding: "0.5rem",
            color: "#f8f9fa",
            background: "#0d6efd",
            borderRadius: "0 0 0.5rem 0.5rem ",
          }}
        >
          {activeIndex === 3 && (
            <>
              We process orders quickly to ensure fast delivery, which means
              we're unable to modify or cancel orders once they have been
              submitted. If you need to make changes, please contact our
              customer service team as soon as possible, and we will try to
              assist you. If your order has already shipped, you may need to
              initiate a return once it arrives.
            </>
          )}
        </div>
      </div>
    </div>
  );
}

