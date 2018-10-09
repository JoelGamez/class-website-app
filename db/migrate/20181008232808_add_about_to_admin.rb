class AddAboutToAdmin < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :about, :text
  end
end
