// src/pages/KnowledgeBasePage.jsx
// الصفحة الكاملة - بتجمع الـ 3 components مع بعض

import React, { useState } from "react";
import KBSidebar from "../components/knowledgeBase/KBSidebar";
import KBHeader from "../components/knowledgeBase/KBHeader";
import KBContent from "../components/knowledgeBase/KBContent";

function KnowledgeBasePage() {
  const [activePage, setActivePage] = useState("Knowledge Base");

  function handleSearch(text) {
    // هنا تقدر تربط الـ search بـ API بعدين
    console.log("Searching for:", text);
  }

  return (
    <div style={styles.layout}>

      {/* Component 1: الـ Sidebar */}
      <KBSidebar activePage={activePage} setActivePage={setActivePage} />

      {/* المحتوى الرئيسي */}
      <div style={styles.mainContent}>

        {/* Component 2: الـ Hero Search Header */}
        <KBHeader onSearch={handleSearch} />

        {/* Component 3: Categories + Recent Guides */}
        <KBContent />

      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    fontFamily: "'Segoe UI', sans-serif",
  },
  mainContent: {
    marginLeft: "240px", // نفس عرض الـ Sidebar
    flex: 1,
  },
};

export default KnowledgeBasePage;