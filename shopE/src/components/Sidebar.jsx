import '../components/css/Sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Best Sellers</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        {/* Add more best-seller items here */}
      </ul>
    </div>
  );
}

export default Sidebar;
