class CreateQuizQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :quiz_questions do |t|
      t.string :question
      t.belongs_to :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
