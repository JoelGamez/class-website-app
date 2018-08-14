require "application_system_test_case"

class PostsTest < ApplicationSystemTestCase
  setup do
    @post = posts(:one)
  end

  test "visiting the index" do
    visit posts_url
    assert_selector "h1", text: "Posts"
  end

  test "creating a Post" do
    visit posts_url
    click_on "New Post"

    fill_in "Content", with: @post.content
    fill_in "Date", with: @post.date
    fill_in "Is Class Project", with: @post.is_class_project
    fill_in "Is Event", with: @post.is_event
    fill_in "Is Hw", with: @post.is_hw
    fill_in "Is Math", with: @post.is_math
    fill_in "Is Science", with: @post.is_science
    fill_in "Is Spanish", with: @post.is_spanish
    fill_in "Is Tutorial", with: @post.is_tutorial
    fill_in "Title", with: @post.title
    click_on "Create Post"

    assert_text "Post was successfully created"
    click_on "Back"
  end

  test "updating a Post" do
    visit posts_url
    click_on "Edit", match: :first

    fill_in "Content", with: @post.content
    fill_in "Date", with: @post.date
    fill_in "Is Class Project", with: @post.is_class_project
    fill_in "Is Event", with: @post.is_event
    fill_in "Is Hw", with: @post.is_hw
    fill_in "Is Math", with: @post.is_math
    fill_in "Is Science", with: @post.is_science
    fill_in "Is Spanish", with: @post.is_spanish
    fill_in "Is Tutorial", with: @post.is_tutorial
    fill_in "Title", with: @post.title
    click_on "Update Post"

    assert_text "Post was successfully updated"
    click_on "Back"
  end

  test "destroying a Post" do
    visit posts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Post was successfully destroyed"
  end
end
