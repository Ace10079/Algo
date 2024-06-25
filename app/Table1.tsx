import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { CiPlay1 } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Table1 = () => {
  return (
    <div className="p-3">
      <Table responsive="sm" bordered>
        <thead className="bg-dark">
          <tr>
            <th className="text-center bg-light">S.no</th>
            <th className="text-center bg-light">Broker Name</th>
            <th className="text-center bg-light">Broker ID</th>
            <th className="text-center bg-light">Name Tag</th>
            <th className="text-center bg-light">App ID</th>
            <th className="text-center bg-light">App Secret Key</th>
            <th className="text-center bg-light">Status</th>
            <th className="text-center bg-light">Last Token Generated at</th>
            <th className="text-center bg-light">Generate Token</th>
            <th className="text-center bg-light">Action</th>
            <th className="text-center bg-light">Added at</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td className="text-center">Kotak Neo</td>
            <td className="text-center">4784903</td>
            <td className="text-center">Kotak Neo</td>
            <td className="text-center">....</td>
            <td className="text-center">......</td>
            <td className="text-center">
              <button className="btn btn-success p-1">Active</button>
            </td>
            <td className="text-center">12.04.2024 03:55</td>
            <td className="text-center text-success">Click To Generate Token</td>
            <td className="text-center">
              <div className="d-flex justify-content-center gap-2">
                <CiPlay1 className="h-5 w-5 text-success" />
                <RxCross2 className="h-5 w-5 text-danger" />
              </div>
            </td>
            <td className="text-center">12.04.2024 03:55</td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td className="text-center">Kotak Neo</td>
            <td className="text-center">4784903</td>
            <td className="text-center">Kotak Neo</td>
            <td className="text-center">....</td>
            <td className="text-center">......</td>
            <td className="text-center">
              <button className="btn btn-danger p-1">Inactive</button>
            </td>
            <td className="text-center">12.04.2024 03:55</td>
            <td className="text-center text-success">Click To Generate Token</td>
            <td className="text-center">
              <div className="d-flex justify-content-center gap-2">
                <CiPlay1 className="h-5 w-5 text-success" />
                <RxCross2 className="h-5 w-5 text-danger" />
              </div>
            </td>
            <td className="text-center">12.04.2024 03:55</td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td className="text-center">Kotak Neo</td>
            <td className="text-center">4784903</td>
            <td className="text-center">Kotak Neo</td>
            <td className="text-center">....</td>
            <td className="text-center">......</td>
            <td className="text-center">
              <button className="btn btn-success p-1">Active</button>
            </td>
            <td className="text-center">12.04.2024 03:55</td>
            <td className="text-center text-success">Click To Generate Token</td>
            <td className="text-center">
              <div className="d-flex justify-content-center gap-2">
                <CiPlay1 className="h-5 w-5 text-success" />
                <RxCross2 className="h-5 w-5 text-danger" />
              </div>
            </td>
            <td className="text-center">12.04.2024 03:55</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Table1;
