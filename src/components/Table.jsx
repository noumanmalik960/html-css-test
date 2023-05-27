import React from "react";

function Table() {
  const tableHeaderData = [
    <input type="checkbox" />,
    "NO",
    "기존유형",
    "신청유형",
    "제출서류",
    "신청일시",
    "승인여부",
    "승인거부 사유",
    "승인일시",
    "관리자",
  ];
  const tableData = [
    {
      existingType: "소득적격",
      applicationtype: "소득적격",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "",
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인거부",
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "일반개인",
      applicationtype: "소득적격",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인완료", // approved
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승⁠인⁠대⁠기", // waiting
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인거부", // denied
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승⁠인⁠대⁠기", // waiting
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인거부", // denied
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },

    {
      existingType: "소득적격",
      applicationtype: "소득적격",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "",
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승⁠인⁠대⁠기", // waiting
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인거부", // denied
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "소득적격",
      applicationtype: "소득적격",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "",
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승⁠인⁠대⁠기",
      reason: "",
      approvalDate: "",
      manager: "",
    },
    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인거부",
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "일반개인",
      applicationtype: "소득적격",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인완료", // approved
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },

    {
      existingType: "소득적격",
      applicationtype: "개인전문",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인거부",
      reason:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
    {
      existingType: "일반개인",
      applicationtype: "소득적격",
      viewBtn: "보⁠기",
      submitDate: "2023-01-10 09:00:00",
      approval: "승인완료", // approved
      reason: "",
      approvalDate: "2023-01-10 09:00:00",
      manager: "김관리자",
    },
  ];
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            {tableHeaderData.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
          {tableData &&
            tableData.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{item?.existingType}</td>
                <td>{item?.applicationtype}</td>
                <td>
                  <span className="look-btn">{item?.viewBtn}</span>
                </td>
                <td>{item?.submitDate}</td>
                <td>
                  <span
                    className={`status ${
                      item?.approval === "승인완료"
                        ? "approve"
                        : item?.approval === "승인거부"
                        ? "reject"
                        : item?.approval === "승⁠인⁠대⁠기"
                        ? "pending"
                        : null
                    }`}
                  >
                    {item?.approval}
                  </span>
                </td>
                <td>{item?.reason}</td>
                <td>{item?.approvalDate}</td>
                <td>{item?.manager}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
