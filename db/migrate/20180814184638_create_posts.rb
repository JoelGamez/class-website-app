class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.boolean :is_hw
      t.boolean :is_math
      t.boolean :is_science
      t.boolean :is_spanish
      t.boolean :is_event
      t.boolean :is_tutorial
      t.boolean :is_class_project
      t.date :date

      t.timestamps
    end
  end
end
