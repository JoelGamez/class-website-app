class AddResourcesToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :is_resource, :boolean
  end
end
