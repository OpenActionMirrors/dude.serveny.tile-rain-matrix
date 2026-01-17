import streamDeck from "@elgato/streamdeck";

import { MatrixTile } from "./actions/tile";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel("info");

// Register the increment action.
streamDeck.actions.registerAction(new MatrixTile());

// Finally, connect to the Stream Deck.
streamDeck.connect();
