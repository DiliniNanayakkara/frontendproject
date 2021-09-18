import "./DashbordData.css";

import { useState, useEffect } from "react";
import Axios from "axios";
export default function WidgetLg() {

  const [email, setemail] = useState("");
  const [first_name, setfirst] = useState("");
  const [last_name, setlast] = useState("");
  const [contact_no, setcontact] = useState("");
  const [nic, setnic] = useState("");

  const [employeeList, setEmployeeList] = useState([]);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  useEffect(() => {
    Axios.get("http://local
          <td className="widgetLgUser">
            <img
              src="https://ssc98hsc00.com/uploads/user/340558.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mark Mexdo</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">27</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Lily Carone</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">25</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
