Types::QueryType = GraphQL::ObjectType.define do
  name "Query"


  field :posts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.all}
  end

  field :mathPosts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.where(is_math:true)}
  end

  field :sciencePosts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.where(is_science:true)}
  end

  field :spanishPosts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.where(is_spanish:true)}
  end

  field :hwPosts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.where(is_hw:true)}
  end

  field :eventPosts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.where(is_event:true)}
  end

  field :classProjectPosts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.where(is_class_project:true)}
  end




end
