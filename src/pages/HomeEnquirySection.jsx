const EnquiryForm = () => {
    const enquirySections=[1,2,3,4];
  return <>
  <div className="enquiry-container">
  {
    enquirySections.map((curEnq,index)=>(
     <div key={index}>{curEnq}</div>   
    ))
  }
</div>
  </>;
};
export default EnquiryForm;
