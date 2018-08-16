Types::QueryType = GraphQL::ObjectType.define do
  name "Query"


  field :posts, Types::PostType.to_list_type do
    description"return all posts"
    resolve ->(obj, args, context){Post.all}
  end



end
