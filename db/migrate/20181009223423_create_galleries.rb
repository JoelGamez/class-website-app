class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :title
      t.text :description
      t.boolean :add_to_slide_show
      t.references :admin, foreign_key: true

      t.timestamps
    end
  end
end
