import React, { useState } from "react";
import { DocumentsModal, TableActions, TableFilters } from "../components";
import { useDisclosure } from "@chakra-ui/react";

function Table() {
  const initialData = [
    {
      id: 0,
      checked: false,
      existingType: "소득적격",
      applicationtype: "소득적격",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "김관리자",
    },
    {
      id: 1,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      id: 2,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승인거부",
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      id: 3,
      checked: false,
      existingType: "일반개인",
      applicationtype: "소득적격",
      submitDate: "2023-01-10 09:00:00",
      status: "승인완료", // approved
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      id: 4,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기", // pending
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      id: 5,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승인거부", // denied
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      id: 6,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기", // pending
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      id: 7,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승인거부", // denied
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },

    {
      id: 8,
      checked: false,
      existingType: "소득적격",
      applicationtype: "소득적격",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "김관리자",
    },
    {
      id: 9,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      id: 10,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기", // waiting
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      id: 11,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승인거부", // denied
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      id: 12,
      checked: false,
      existingType: "소득적격",
      applicationtype: "소득적격",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "김관리자",
    },
    {
      id: 13,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      id: 14,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승인거부",
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      id: 15,
      checked: false,
      existingType: "일반개인",
      applicationtype: "소득적격",
      submitDate: "2023-01-10 09:00:00",
      status: "승인완료", // approved
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },

    {
      id: 16,
      checked: false,
      existingType: "소득적격",
      applicationtype: "개인전문",
      submitDate: "2023-01-10 09:00:00",
      status: "승인거부",
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      id: 17,
      checked: false,
      existingType: "일반개인",
      applicationtype: "소득적격",
      submitDate: "2023-01-10 09:00:00",
      status: "승인완료", // approved
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
  ];
  const [tableData, setTableData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(tableData);
  const [globalCheck, setGlobalCheck] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const checkedItems = filteredData.filter((item) => item.checked);

  const handleCheck = (id) => {
    const updatedData = filteredData.map((item) => {
      // uncheck global input if any of the item is unchecked
      if (item.checked) {
        setGlobalCheck(false);
      }
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setFilteredData(updatedData);
  };

  const toggleGlobalCheck = () => {
    setGlobalCheck((prevState) => !prevState);

    const updatedData = filteredData.map((item) => {
      return { ...item, checked: !globalCheck };
    });
    setFilteredData(updatedData);
  };

  return (
    <div>
      <TableFilters
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        orignalData={tableData}
      />
      <TableActions
        checkedItems={checkedItems}
        checkedItemsLength={checkedItems.length}
      />
      <hr />
      <table className="table">
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={globalCheck}
                onChange={toggleGlobalCheck}
              />
            </th>
            <th>NO</th>
            <th>기존유형</th>
            <th>신청유형</th>
            <th>제출서류</th>
            <th>신청일시</th>
            <th>승인여부</th>
            <th>승인거부 사유</th>
            <th>승인일시</th>
            <th>관리자</th>
          </tr>
          {filteredData &&
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => handleCheck(item.id)}
                  />
                </td>
                <td>{index + 1}</td>
                <td>{item?.existingType}</td>
                <td>{item?.applicationtype}</td>
                <td onClick={onOpen}>
                  <span className="look-btn">보⁠기</span>
                </td>
                <td>{item?.submitDate}</td>
                <td>
                  <span
                    className={`status ${
                      item?.status === "승인완료"
                        ? "approve"
                        : item?.status === "승인거부"
                        ? "reject"
                        : item?.status === "승⁠인⁠대⁠기"
                        ? "pending"
                        : null
                    }`}
                  >
                    {item?.status}
                  </span>
                </td>
                <td>{item?.reason}</td>
                <td>{item?.approvalDate}</td>
                <td>{item?.manager}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Documents modal */}
      <DocumentsModal onClose={onClose} isOpen={isOpen} onSave={onClose} />
    </div>
  );
}

export default Table;
