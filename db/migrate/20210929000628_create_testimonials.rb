class CreateTestimonials < ActiveRecord::Migration[6.1]
  def change
    create_table :testimonials do |t|
      t.string :image
      t.string :paragraph
      t.string :author

      t.timestamps
    end
  end
end
