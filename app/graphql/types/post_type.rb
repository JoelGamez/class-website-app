

Types::PostType = GraphQL::ObjectType.define do
  name "Post"
  field :title, types.String
  field :content, types.String
  field :id, types.Int
  field :is_math, types.Boolean


end
