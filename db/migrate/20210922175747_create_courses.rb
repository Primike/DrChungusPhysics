class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :subject
      t.string :subject_image
      t.boolean :completed

      t.timestamps
    end
  end
end