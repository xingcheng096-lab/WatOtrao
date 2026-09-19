import { Link } from "react-router-dom";
export function NotFoundPage() { return <div className="card" style={{ textAlign: "center", padding: 80 }}><div style={{ fontSize: 54, color: "#11178f", fontWeight: 700 }}>404</div><h1>ទំព័រមិនត្រូវបានរកឃើញ</h1><p>ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមាននៅក្នុង Admin CMS ទេ។</p><Link className="btn btn-primary" to="/">ត្រឡប់ទៅផ្ទាំងគ្រប់គ្រង</Link></div>; }
