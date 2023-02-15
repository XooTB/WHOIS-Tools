import { useContext } from "react";
import { RawRow } from "./Rows";
import { dataContext } from "../containers/pages/whoisResults";
import { useWhoisContext } from "../hooks/useWhoisContext";

const Otherinfo = () => {
  const { whoisData } = useWhoisContext();
  const info = whoisData;
  return (
    <div className="raw-area">
      {whoisData && (
        <div>
          <h1 className="tl m0 domain-header">Raw Info</h1>
          <div>
            <h3 className="rTl">Registrant Contact Information:</h3>
            <RawRow id="Name" data={info["Registrant Name"]} />
            <RawRow id="Organization" data={info["Registrant Organization"]} />
            <RawRow id="Address" data={info["Registrant Street"]} />
            <RawRow id="City" data={info["Registrant City"]} />
            <RawRow
              id="State / Province"
              data={info["Registrant State/Province"]}
            />
            <RawRow id="Postal Code" data={info["Registrant Postal Code"]} />
            <RawRow id="Country" data={info["Registrant Country"]} />
            <RawRow id="Phone" data={info["Registrant Phone"]} />
            <RawRow id="Email" data={info["Registrant Phone Ext"]} />
          </div>
          <div>
            <h3 className="rTl">Administrative Contact Information:</h3>
            <RawRow id="Name" data={info["Admin Name"]} />
            <RawRow id="Organization" data={info["Admin Organization"]} />
            <RawRow id="Address" data={info["Admin Street"]} />
            <RawRow id="City" data={info["Admin City"]} />
            <RawRow id="State / Province" data={info["Admin State/Province"]} />
            <RawRow id="Postal Code" data={info["Admin Postal Code"]} />
            <RawRow id="Country" data={info["Admin Country"]} />
            <RawRow id="Phone" data={info["Admin Phone"]} />
            <RawRow id="Email" data={info["Admin Email"]} />
          </div>
          <div>
            <h3 className="rTl">Technical Contact Information:</h3>
            <RawRow id="Name" data={info["Tech Name"]} />
            <RawRow id="Organization" data={info["Tech Organization"]} />
            <RawRow id="Address" data={info["Tech Street"]} />
            <RawRow id="City" data={info["Tech City"]} />
            <RawRow id="State / Province" data={info["Tech State/Province"]} />
            <RawRow id="Postal Code" data={info["Tech Postal Code"]} />
            <RawRow id="Country" data={info["Tech Country"]} />
            <RawRow id="Phone" data={info["Tech Phone"]} />
            <RawRow id="Email" data={info["Tech Email"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Otherinfo;
