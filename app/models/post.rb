class Post < ApplicationRecord
  belongs_to :admin
  has_many_attached :images

end
