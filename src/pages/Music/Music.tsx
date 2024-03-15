import { BackgroundContainer, InteractiveContentContainer, Heading, TextContainer, Description, NoteRangeContainer, RightContainer, InlineContainer, Prompt, CategoryButtonContainer, CategoryButton, Dropdown, Button, SongCardContainer} from './styled'
import Navbar from '../../components/Navbar/Navbar'
import allSongDetailsData from './all_song_detailed_info.json';
import songCategories from './song_category_lists.json';
import playlistInfo from './all_playlist_info.json';
import { useState } from 'react';

interface SongCategories {
    [category: string]: string[];
}
const categories: SongCategories = songCategories;

interface PlaylistTracks {
    [playlistId: string]: string[];
}
const playlistTracks: PlaylistTracks = playlistInfo;

const Music = () => {

    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const minOctave = 0;
    const maxOctave = 8;
    const noteOptions = [];

    const noteToMidi = (note: string) => {
        const noteRegex = /([A-G]#?)(\d)/;
        const match = note.match(noteRegex);
    
        if (match) {
            const noteName = match[1];
            const octave = parseInt(match[2], 10);
            const noteValue = notes.indexOf(noteName);
            const midiNumber = 12 + 12 * octave + noteValue;
            return midiNumber;
        } else {
            console.error('Invalid note format');
            return null;
        }
    }

    const [allSongDetails, setAllSongDetails] = useState<Songs>(allSongDetailsData);
    const [matchingSongs, setMatchingSongs] = useState<SongDetails[]>([]);
    const [highestNote, setHighestNote] = useState('A4');
    const [lowestNote, setLowestNote] = useState('A2');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([Object.keys(categories)[0]]); 
    const itemsPerPage = 8;

    for (let octave = minOctave; octave <= maxOctave; octave++) {
        for (let note of notes) {
            noteOptions.push(<option key={note + octave} value={note + octave}>{note + octave}</option>);
        }
    }

    const getPaginatedSongs = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return matchingSongs.slice(startIndex, endIndex);
    };

    const getTotalPages = () => {
        return Math.ceil(matchingSongs.length / itemsPerPage);
    }

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, getTotalPages()));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const getNotes = () => {
        console.log(`Highest Note: ${highestNote}, Lowest Note: ${lowestNote}`);
        const highestMidi = noteToMidi(highestNote);
        const lowestMidi = noteToMidi(lowestNote);
        console.log(`Highest Midi: ${highestMidi}, Lowest Midi: ${lowestMidi}`);
        if (lowestMidi && highestMidi) {
            getMatchingSongs(lowestMidi, highestMidi);
        }
    }

    const toggleCategory = (category: string) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((c) => c !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };

    type SongDetails = {
        max_note: number;
        min_note: number;
        track_name: string | null;
        track_id: string | null;
    };
    
    type Songs = {
        [key: string]: SongDetails;
    };

    

    const getMatchingSongs = async (lowestNoteInRange: number, highestNoteInRange: number) => {

        const filteredSongIds = new Set();
        selectedCategories.forEach(category => {
            if (category in categories) {
                categories[category].forEach(playlistId => {
                    if (playlistId in playlistInfo) {
                         playlistTracks[playlistId].forEach(trackId => filteredSongIds.add(trackId));
                    }
                });
            }
        });
        

        const filteredSongDetails = Object.entries(allSongDetails).filter(([_, value]) => { return value.track_id != null && filteredSongIds.has(value.track_id)})
        
        const matchingSongs =  filteredSongDetails.map(details => details[1]).filter((songInfo) => {
            let maxNoteInSong = songInfo.max_note
            let minNoteInSong = songInfo.min_note
            let trackId = songInfo.track_id

            if (trackId == null || maxNoteInSong > highestNoteInRange || minNoteInSong < lowestNoteInRange) {
                return false;
            }

            let isCategoryMatch = false;
            Object.entries(playlistTracks).forEach((playlist) => {
                let playlistId = playlist[0];
                let tracks = playlist[1];
                console.log(trackId!)

                if (tracks.includes(trackId!)) {
                    selectedCategories.forEach(category => {
                        if (category in categories && categories[category].includes(playlistId)) {
                            isCategoryMatch = true;
                        }
                    })
                }
            })

            return isCategoryMatch;
        });
        setMatchingSongs(matchingSongs); 
    }

    return (
        <>
            <Navbar tab={"Music"}/>
            <BackgroundContainer>
                <TextContainer>
                    <Heading>its music time.</Heading>
                    <InteractiveContentContainer>
                        <Description>put in your vocal range & i'll give you a list of every song 
                            (out of the 15,000 most popular) that's within your range.</Description>
                        <NoteRangeContainer>
                            <InlineContainer>
                                <Prompt>lowest note you can sing:</Prompt>
                                <Dropdown defaultValue={lowestNote} onChange={(e) => setLowestNote(e.target.value)}>
                                    {noteOptions}
                                </Dropdown>
                            </InlineContainer>
                            <InlineContainer>
                                <Prompt>highest note you can sing:</Prompt>
                                <Dropdown defaultValue={highestNote} onChange={(e) => setHighestNote(e.target.value)}>
                                    {noteOptions}
                                </Dropdown>
                            </InlineContainer>
                        </NoteRangeContainer>
                        <CategoryButtonContainer>
                                {Object.keys(songCategories).map((category) => (
                                    <CategoryButton
                                        key={category}
                                        onClick={() => toggleCategory(category)}
                                        isSelected={selectedCategories.includes(category)}
                                    >
                                        {category}
                                    </CategoryButton>
                                ))}
                            </CategoryButtonContainer>
                        <RightContainer>
                            <Button onClick={getNotes}>gimme my songs</Button>
                        </RightContainer>
                    </InteractiveContentContainer>
                </TextContainer>
                <SongCardContainer>
                {getPaginatedSongs().map((song, index) => (
                    song.track_id ? (
                        <iframe
                            key={index}
                            src={`https://open.spotify.com/embed/track/${song.track_id}`}
                            width="350"
                            height="80"
                            allowTransparency={true}
                            allow="encrypted-media"
                            style={{ border: 'none' }} 
                        ></iframe>
                    ) : null
                ))} 
                </SongCardContainer>
                {matchingSongs.length > 0 && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button onClick={goToPreviousPage} disabled={currentPage === 1}>prev</Button>
                    <Button onClick={goToNextPage} disabled={currentPage === getTotalPages()}>next</Button>
                </div>}
            </BackgroundContainer>
            
        </>
    )
}

export default Music;