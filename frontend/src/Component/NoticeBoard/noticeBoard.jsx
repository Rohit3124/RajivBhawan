import React from "react";
import "./noticeBoard.css";
import { Notices } from "./notices";

const NoticeBoard = () => {
  return (
    <div className="notice-board" id="noticeBoard">
      {/* <div className="notice-board-header">Notice Board</div>
      <div className="notice-board-content">
        <div className="notice-date-subject">
          <div className="notice-date-header">Date of Notice</div>
          <div className="notice-subject-header">Subject</div>
        </div>
        {Notices.map((notice, index) => (
          <div key={index} className="notice-item">
            <div className="notice-date">{notice.date}</div>
            <div className="notice-subject">
              {notice.url ? (
                <a href={notice.url} target="_blank" rel="noopener noreferrer">
                  {notice.subject}
                </a>
              ) : (
                notice.subject
              )}
            </div>
          </div>
        ))}
      </div> */}
      <div className="notice-board-header">Notice Board</div>
      <table className="notice-board-content">
        <thead>
          <tr>
            <th className="notice-date-header">Date of Notice</th>
            <th className="notice-subject-header">Subject</th>
          </tr>
        </thead>
        <tbody>
          {Notices.map((notice, index) => (
            <tr>
              <td className="notice-date">{notice.date}</td>
              <td className="notice-subject">
                {notice.url ? (
                  <a
                    href={notice.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {notice.subject}
                  </a>
                ) : (
                  notice.subject
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeBoard;
