import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userid === userData.$id : false;
  console.log("Post User ID:", post?.userid);
  console.log("Logged-in User ID:", userData?.$id);
  console.log("Is Author:", isAuthor);
  console.log("Logged-in User Data:", userData);  // Log userData to inspect its structure


  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredimage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center mb-4 relative  rounded-xl p-2">
            <img
              src={appwriteService.getFilePreview(post.featuredimage)}
              alt={post.title}
              className="rounded-xl w-[250px] h-[250]"
            />
          </div>
          <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
          </div>
          <div className="browser-css">{parse(post.content)}</div>
          { isAuthor && <div className="">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-[#64B6AC]" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-[#DD1C1A]" onClick={deletePost}>
                Delete
              </Button>
            </div>
            }
        </div>
      </Container>
    </div>
  ) : null;
}
