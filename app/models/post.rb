class Post < ApplicationRecord
  belongs_to :admin
  has_many_attached :images



  def self.recent_post(num)
    all_posts = Post.all
    post_list = []
    post_list = all_posts.reverse
    recent_post = post_list[0..num]
    return recent_post
  end


end
