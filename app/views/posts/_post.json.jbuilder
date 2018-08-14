json.extract! post, :id, :title, :content, :is_hw, :is_math, :is_science, :is_spanish, :is_event, :is_tutorial, :is_class_project, :date, :created_at, :updated_at
json.url post_url(post, format: :json)
