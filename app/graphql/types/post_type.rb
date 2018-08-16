

Types::PostType = GraphQL::ObjectType.define do
  name "Post"
  field :title, types.String
  field :content, types.String
  field :id, types.String


end
