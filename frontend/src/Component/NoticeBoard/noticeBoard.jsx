import React from "react";
import "./noticeBoard.css";
import { Notices } from "./notices";

const NoticeBoard = () => {
  return (
    <div id="noticeBoard">
      <div className="notice-board">
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
              <tr key={index}>
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
    </div>
  );
};

export default NoticeBoard;
