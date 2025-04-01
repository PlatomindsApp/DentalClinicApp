import styled from "styled-components";

const PlanCards = () => {
  const features = [
    {
      icon: (
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
          />
        </svg>
      ),
      text: (
        <>
          <strong>20</strong> team members
        </>
      )
    },
    {
      icon: (
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
          />
        </svg>
      ),
      text: "Plan team meetings"
    },
    {
      icon: (
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
          />
        </svg>
      ),
      text: "File sharing"
    }
  ];

  return (
    <StyledWrapper>
      <div className="plan-container">
        {/* Basic Plan Card */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">
              <span>
                $19 <small>/ m</small>
              </span>
            </span>
            <p className="title">Basic Plan</p>
            <p className="info">
              This plan is suitable for small teams and businesses just getting
              started.
            </p>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="action">
              <a className="button" href="#">
                Choose plan
              </a>
            </div>
          </div>
        </div>

        {/* Standard Plan Card */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">
              <span>
                $49 <small>/ m</small>
              </span>
            </span>
            <p className="title">Standard Plan</p>
            <p className="info">
              Ideal for growing teams that need more features and collaboration
              tools.
            </p>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="action">
              <a className="button" href="#">
                Choose plan
              </a>
            </div>
          </div>
        </div>

        {/* Unlimited Plan Card */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">
              <span>
                $99 <small>/ m</small>
              </span>
            </span>
            <p className="title">Unlimited Plan</p>
            <p className="info">
              The perfect plan for large teams with unlimited access to all
              features.
            </p>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="action">
              <a className="button" href="#">
                Choose plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .plan-container {
    display: flex;
    justify-content: center; /* Centers the cards */
    gap: 20px; /* Slightly larger gap between cards */
    margin-top: 20px;
  }

  .plan {
    border-radius: 16px;
    box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
    padding: 10px;
    background-color: #fff;
    color: #697e91;
    max-width: 300px;
    flex: 1;
  }

  .plan strong {
    font-weight: 600;
    color: #425275;
  }

  .plan .inner {
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    background-color:#fff;
    border-radius: 12px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .plan .pricing {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #bed6fb;
    border-radius: 99em 0 0 99em;
    display: flex;
    align-items: center;
    padding: 0.625em 0.75em;
    font-size: 1.25rem;
    font-weight: 600;
    color: #0e264f;
  }

  .plan .pricing small {
    color: #0e264f;
    font-size: 0.75em;
    margin-left: 0.25em;
  }

  .plan .title {
    font-weight: 600;
    font-size: 1.25rem;
    color: #3660d9;
    margin-top: 10px; /* Adds margin to the top of the title */
  }

  .plan .info + * {
    margin-top: 1rem;
    color: #0e264f;
  }

  .plan .features {
    display: flex;
    flex-direction: column;
  }

  .plan .features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plan .features li + * {
    margin-top: 0.75rem;
  }

  .plan .features .icon {
    background-color: #1fcac5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .plan .features .icon svg {
    width: 14px;
    height: 14px;
  }

  .plan .features + * {
    margin-top: 1.25rem;
  }

  .plan .action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .plan .button {
    background: linear-gradient(135deg, #4f9dff, #1e40af);
    color: white;
    padding: 12px 24px;
    font-size: 1.6rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  }

  .plan .button:hover,
  .plan .button:focus {
    background-color: #4133b7;
  }
`;

export default PlanCards;
