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

  def topic_lists
   topics = []

   topics.push("HW") if  self.is_hw
   topics.push("Math")if self.is_math
   topics.push("Spanish") if self.is_spanish
   topics.push("Science")if self.is_science
   topics.push("Tutorial") if self.is_tutorial
   topics.push("Class-Project") if self.is_class_project
   topics.push("Event") if self.is_event

  return topics


 end


  def string_topic_lists(array)
    topics = ""
    for i in array
      if(i == array[-1])
        topics += "#{i}"
      else
         topics += "#{i} | "
      end
    end
    return topics
  end

  def self.resources
    resource = Post.where(is_resource:true)
    return resource
  end

  def self.tutorials
    tutorials = Post.where(is_tutorial:true)
    return tutorials
  end

end
