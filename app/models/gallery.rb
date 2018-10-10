class Gallery < ApplicationRecord
  belongs_to :admin
  has_many_attached :images



def self.get_about_gallery

  galleries = Gallery.where(add_to_slide_show:true)

  about_gallery = galleries.sample

  

  return about_gallery
end





end
