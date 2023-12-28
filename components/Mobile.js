import React from "react";

const Mobile = () => {
  return (
    <>
      <div id="mobile-container">
        <div className="d-md-none d-lg-none d-xl-none d-sm-block d-xs-block">
          <div>
            <a href="tel:+1-8888-750-118">
              <img
                style={{
                  top: 0,
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  background: "#fff",
                  padding: 10,
                }}
                src="../images/modal.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
