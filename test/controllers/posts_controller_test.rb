require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url
    assert_response :success
  end

  test "should get new" do
    get new_post_url
    assert_response :success
  end

  test "should create post" do
    assert_difference('Post.count') do
      post posts_url, params: { post: { content: @post.content, date: @post.date, is_class_project: @post.is_class_project, is_event: @post.is_event, is_hw: @post.is_hw, is_math: @post.is_math, is_science: @post.is_science, is_spanish: @post.is_spanish, is_tutorial: @post.is_tutorial, title: @post.title } }
    end

    assert_redirected_to post_url(Post.last)
  end

  test "should show post" do
    get post_url(@post)
    assert_response :success
  end

  test "should get edit" do
    get edit_post_url(@post)
    assert_response :success
  end

  test "should update post" do
    patch post_url(@post), params: { post: { content: @post.content, date: @post.date, is_class_project: @post.is_class_project, is_event: @post.is_event, is_hw: @post.is_hw, is_math: @post.is_math, is_science: @post.is_science, is_spanish: @post.is_spanish, is_tutorial: @post.is_tutorial, title: @post.title } }
    assert_redirected_to post_url(@post)
  end

  test "should destroy post" do
    assert_difference('Post.count', -1) do
      delete post_url(@post)
    end

    assert_redirected_to posts_url
  end
end
