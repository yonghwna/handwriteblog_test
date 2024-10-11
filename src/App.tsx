import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import "./App.css";
import HandwritingAnimation from "./components/HandwritingAnimation";
import { Button } from "./components/ui/button";
import { Menu } from "lucide-react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 글", content: "안녕하세요, 첫 번째 글입니다." },
    { id: 2, title: "두 번째 글", content: "블로그 시작하기" },
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* 헤더 */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">나의 블로그</h1>
          <Button onClick={toggleSidebar} variant="ghost" size="icon">
            <Menu />
          </Button>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-8 flex">
        {/* 사이드바 */}
        <aside
          className={`w-64 bg-white shadow-md p-6 transition-all duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static top-0 left-0 h-full z-10`}
        >
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  홈
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  소개
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  글 목록
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  연락처
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* 블로그 포스트 목록 */}
        <div className="flex-grow lg:ml-8">
          <h2 className="text-2xl font-semibold mb-6">최근 글</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* 손글씨 애니메이션 섹션 */}
      <section className="bg-white shadow-md my-8 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">손글씨 애니메이션</h2>
        <HandwritingAnimation />
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 나의 블로그. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
