gr.work_notes.getJournalEntry(1);
//Returns only the most recent journal entry.
gr.work_notes.getJournalEntry(-1);
//Returns all journal entries, delimited by "\n\n"

/* AUTHOR'S NOTE
Fig. 1.16: Two ways to get journal entries from a GlideRecord
	As the code above mentions, line 3 will get you all journal entries; but not
	 as an array. Instead, all journal entries will be returned, delimited by
	 double-new-line ("\n\n").
	You can split this returned value into an array of journal entries like so:
	
	var allWorkNotes = gr.work_notes.getJournalEntry(-1).split('\n\n');
	
	However, consider what might happen if one of the journal entries that are
	 returned, contain a double-return? - That single entry would be converted
	 into a new array element!
	You can get around this with some fancy query magic, by querying the
	 sys_journal_field table where journal entries are stored, and getting the
	 journal entry values for this record and field, directly from there.
 */